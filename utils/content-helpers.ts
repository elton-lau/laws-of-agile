export interface ContentDocument {
  id: string;
  content: string;
  _meta: {
    filePath: string;
    fileName: string;
    directory: string;
    path: string;
    extension: string;
  };
  [key: string]: any;
}

export function transformLaw(document: ContentDocument) {
  const pathParts = document._meta.filePath.split('/');
  const locale = pathParts.length > 1 ? pathParts[0] : 'en';
  const slug = document.id;
  
  return {
    ...document,
    description: document.content,
    locale,
    slug,
  };
}
