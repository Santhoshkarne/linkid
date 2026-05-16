import type { User as PrismaUser, Link as PrismaLink } from "@prisma/client";

export function buildVCard({user , links}: { user: PrismaUser, links: PrismaLink[] }): string {
  const CRLF = "\r\n";
  let vcard = `BEGIN:VCARD${CRLF}`;
  vcard += `VERSION:3.0${CRLF}`;                   
  vcard += `FN:${user.name ?? user.username}${CRLF}`;
  vcard += `N:${user.name ?? user.username};;;;${CRLF}`;
  
  if (user.email) vcard += `EMAIL;TYPE=INTERNET:${user.email}${CRLF}`;
  if (user.bio)   vcard += `NOTE:${user.bio}${CRLF}`;
  if (user.image) vcard += `PHOTO;VALUE=URI:${user.image}${CRLF}`;

  for (const link of links) {
    vcard += `URL;TYPE=${link.platform.toUpperCase()}:${link.url}${CRLF}`;
  }

  vcard += `URL:https://linkid.qzz.io/${user.username}${CRLF}`;
  vcard += `END:VCARD${CRLF}`;
  return vcard;
}