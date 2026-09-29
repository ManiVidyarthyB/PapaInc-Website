type Props = { name: "Facebook" | "Instagram" | "LinkedIn" | "X" };

export default function SocialIcon({ name }: Props) {
  switch (name) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-2.3 4.8h4.6a2.9 2.9 0 0 1 2.9 2.9v4.6a2.9 2.9 0 0 1-2.9 2.9H9.7a2.9 2.9 0 0 1-2.9-2.9V9.7a2.9 2.9 0 0 1 2.9-2.9Zm0 1.2A1.7 1.7 0 0 0 8 9.7v4.6c0 .94.76 1.7 1.7 1.7h4.6c.94 0 1.7-.76 1.7-1.7V9.7c0-.94-.76-1.7-1.7-1.7H9.7Zm5.05.85a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2ZM12 9.4a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2Zm0 1.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM8.9 16.5H7.1v-6h1.8v6ZM8 9.7a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1Zm8.9 6.8h-1.8v-2.9c0-.7-.01-1.6-.98-1.6-.98 0-1.13.77-1.13 1.55v2.95h-1.8v-6h1.73v.82h.02c.24-.46.83-.94 1.71-.94 1.83 0 2.17 1.2 2.17 2.77v3.35Z" />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm2.4 14.6-2.7-3.6-3.1 3.6h-.9l3.6-4.2L7.6 7.4h3l2.5 3.3 2.9-3.3h.9l-3.4 3.9 3.9 5.3h-3Zm-5.4-8.5 5.8 7.8h.9L9.9 8.1H9Z" />
        </svg>
      );
  }
}
