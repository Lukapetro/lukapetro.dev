// src/data/contacts.ts
interface Contact {
  platform: string;
  url: string;
  username: string;
  displayName: string;
  action: "open" | "copy";
}

export const contacts: Contact[] = [
  {
    platform: "github",
    url: "https://github.com/Lukapetro",
    username: "Lukapetro",
    displayName: "GitHub",
    action: "open",
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/lukapetro",
    username: "lukapetro",
    displayName: "LinkedIn",
    action: "open",
  },
  {
    platform: "instagram",
    url: "https://instagram.com/lucapetro",
    username: "lucapetro",
    displayName: "Instagram",
    action: "open",
  },
  {
    platform: "email",
    url: "mailto:lucapetro93@gmail.com",
    username: "lucapetro93@gmail.com",
    displayName: "Email",
    action: "copy",
  },
];
