<div align="center">
  <img width="1200" height="475" alt="Laws of Agile Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<p align="center">
  <strong>A curated collection of heuristic principles for software engineering, organized by The Three Ways of DevOps.</strong>
</p>

<p align="center">
  <a href="https://lawsofagile.com">View Live Site</a> •
  <a href="#the-laws">Explore Laws</a> •
  <a href="#contributing">Contribute</a>
</p>

---

> *"In the complex world of DevOps and Agile, it's easy to get lost in tooling and frameworks. These laws bring focus back to the fundamental dynamics of systems and people."*

---

## Why Laws of Agile?

Software delivery is governed by invisible forces—organizational dynamics, human psychology, and systems theory. While not strict physical laws, these observations provide a powerful lens to understand why agile transformations succeed or fail.

By understanding the forces at play within complex systems, we can:
- **Make better decisions** about team structure and architecture
- **Design more resilient organizations** that adapt to change
- **Foster environments** where innovation flows naturally

## The Laws

Organized by **The Three Ways of DevOps**:

### 🌊 The First Way: Flow
*Optimizing the speed of value delivery from idea to customer.*

| Law | Summary |
|-----|---------|
| **Little's Law** | Lead time = WIP ÷ Throughput |
| **Theory of Constraints** | A system is only as fast as its bottleneck |
| **Brooks's Law** | Adding people to a late project makes it later |
| **Parkinson's Law** | Work expands to fill the time available |

### 🔄 The Second Way: Feedback
*Creating fast loops of information from right to left.*

| Law | Summary |
|-----|---------|
| **Conway's Law** | Systems mirror communication structures |
| **Goodhart's Law** | When a measure becomes a target, it ceases to be useful |
| **Linus's Law** | Given enough eyeballs, all bugs are shallow |

### 🧠 The Third Way: Continual Learning
*Fostering a culture of experimentation and mastery.*

| Law | Summary |
|-----|---------|
| **Gall's Law** | Complex systems evolve from simple ones |
| **Occam's Razor** | The simplest explanation is usually correct |
| **Hofstadter's Law** | It always takes longer than you expect |

[**→ View all laws on the website**](https://lawsofagile.com)

---

## Getting Started

### Prerequisites

- Node.js 18+

### Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` directory.

---

## Deployment

This project is configured for **Cloudflare Pages** with automated CI/CD via GitHub Actions.

### Automatic Deployment

Push to `main` branch triggers automatic deployment.

**Required GitHub Secrets:**

| Secret | Description |
|--------|-------------|
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare Account ID |
| `CLOUDFLARE_API_TOKEN` | API Token with Pages permissions |

### Manual Deployment

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist --project-name=laws-of-agile
```

---

## Contributing

Want to add a new law or improve an existing one?

1. Fork the repository
2. Add your law in `content/laws/` as a Markdown file
3. Submit a pull request

See the [content format](content/laws/) for examples.

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** for blazing fast builds
- **Tailwind CSS 3** for styling
- **Content Collections** for law content management
- **Cloudflare Pages** for hosting

---

## Contributors

<table>
  <tr>
    <td align="center"><strong>Elton Lau</strong><br/><a href="https://github.com/elton-lau">GitHub</a> · <a href="https://www.linkedin.com/in/elton-lau/">LinkedIn</a></td>
    <td align="center"><strong>Terry Ng</strong><br/><a href="https://www.linkedin.com/in/terrynch/">LinkedIn</a></td>
  </tr>
</table>

---

## License

This project is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)](LICENSE).

[![CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/)

---

<p align="center">
  <sub>Built with ❤️ for the DevOps and Agile community</sub>
</p>
