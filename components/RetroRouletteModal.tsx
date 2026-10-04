import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Law } from '../types';
import { getLawsByLocale } from '../data';
import { useNavigation } from '../App';
import Icon from './Icon';

interface RetroRouletteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RetroRouletteModal: React.FC<RetroRouletteModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { currentRoute, navigateTo } = useNavigation();
  const [selectedLaw, setSelectedLaw] = useState<Law | null>(null);
  const [copied, setCopied] = useState(false);

  const laws = getLawsByLocale(currentRoute.locale);

  const getRandomLaw = useCallback(() => {
    if (!laws || laws.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * laws.length);
    return laws[randomIndex];
  }, [laws]);

  const drawCard = useCallback(() => {
    setCopied(false);
    const newLaw = getRandomLaw();
    setSelectedLaw(newLaw);
  }, [getRandomLaw]);

  useEffect(() => {
    if (isOpen && !selectedLaw) {
      drawCard();
    }
  }, [isOpen, selectedLaw, drawCard]);

  if (!isOpen || !selectedLaw) return null;

  const handleCopyPrompt = () => {
    const promptText = selectedLaw.retroPrompt || selectedLaw.summary;
    const formattedText = `> **Retro Prompt (${selectedLaw.name}):** ${promptText}`;
    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavigateToLaw = () => {
    navigateTo({ page: 'law', lawId: selectedLaw.id, locale: currentRoute.locale });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative overflow-hidden flex flex-col gap-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="retro-roulette-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎲</span>
            <div>
              <h2 id="retro-roulette-title" className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
                {t('retroRoulette.modalTitle')}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {t('retroRoulette.subtitle')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t('retroRoulette.close')}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          >
            <Icon name="close" className="text-2xl" />
          </button>
        </div>

        {/* Card Content */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <h3
              onClick={handleNavigateToLaw}
              className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white hover:text-primary cursor-pointer transition-colors"
            >
              {selectedLaw.name}
            </h3>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Icon name={selectedLaw.icon} className="text-2xl text-primary" />
            </div>
          </div>

          {selectedLaw.axiom && (
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                {t('retroRoulette.axiom')}
              </span>
              <p className="text-base md:text-lg font-semibold italic text-slate-800 dark:text-slate-200 leading-snug">
                "{selectedLaw.axiom}"
              </p>
            </div>
          )}

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-2 flex items-center gap-1.5">
              <Icon name="forum" className="text-sm text-primary" />
              {t('retroRoulette.retroPrompt')}
            </span>
            <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {selectedLaw.retroPrompt || selectedLaw.summary || t('retroRoulette.noPrompt')}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            onClick={handleNavigateToLaw}
            className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
          >
            <span>{t('retroRoulette.viewLawDetail')}</span>
            <Icon name="arrow_forward" className="text-sm" />
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyPrompt}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <Icon name={copied ? "check" : "content_copy"} className="text-base" />
              {copied ? t('retroRoulette.copied') : t('retroRoulette.copyPrompt')}
            </button>

            <button
              onClick={drawCard}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Icon name="casino" className="text-base" />
              {t('retroRoulette.drawAnother')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroRouletteModal;
