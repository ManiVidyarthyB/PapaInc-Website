// Downloads every site image from the GoDaddy CDN into public/assets.
// Run once with:  npm run fetch-assets
import { mkdir, writeFile } from "node:fs/promises";

const images = {
  "logo.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Logo2.png/:/rs=w:263,h:150,cg:true,m/cr=w:263,h:150/qt=q:95",
  "heroBuildings.jpg": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Strategic%20Partners.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:960,cg:true",
  "whoWeAre.jpg": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Quality%20Home%20Page.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:960,cg:true",
  "capitol.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Capitol-Hill.jpg/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
  "healthcare.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/healthcare.jpg/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
  "transaction.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Transaction%20Services.jpg/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
  "help1.webp": "https://img1.wsimg.com/isteam/stock/11253/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
  "help2.webp": "https://img1.wsimg.com/isteam/stock/12135/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
  "help3.webp": "https://img1.wsimg.com/isteam/stock/12338/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
  "help4.webp": "https://img1.wsimg.com/isteam/stock/12828/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
  "help5.webp": "https://img1.wsimg.com/isteam/stock/1583/:/cr=t:18.75%25,l:8.33%25,w:83.33%25,h:62.5%25/rs=w:776,h:388,cg:true,m",
  "help6.webp": "https://img1.wsimg.com/isteam/stock/11252/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
  "riskAssurance.webp": "https://img1.wsimg.com/isteam/stock/uNpAN1eWxYfkNzJ7r/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
  "emergencyCircle.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Emergency%20Management.jpg/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
  "transactionCircle.webp": "https://img1.wsimg.com/isteam/stock/29GnJkb/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
  "accountingCircle.webp": "https://img1.wsimg.com/isteam/stock/423/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
  "govColumns.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Government%20Columns%20Light.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true",
  "finance.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Finance.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true",
  "corps.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Corps.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true",
  "about1.webp": "https://img1.wsimg.com/isteam/stock/11252/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
  "about2.webp": "https://img1.wsimg.com/isteam/stock/11253/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
  "about3.webp": "https://img1.wsimg.com/isteam/stock/12135/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
  "contact.jpg": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Industry_Technology_compressed-600x600.jpg/:/rs=w:984,h:984,cg:true,m/cr=w:984,h:984",
  "healthcareBanner.jpg": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/industry_healthcare-still-1920x730.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true",
  "financialBanner.jpg": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Industry_Financial-Services_compressed-1920x73.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true",
  "riskBanner.jpg": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Risk%20Assurance.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true",
  "emergencyBanner.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Industry_Business-Services_offset_555811_compr.jpg/:/rs=w:800,cg:true,m",
  "dealBanner.webp": "https://img1.wsimg.com/isteam/stock/293/:/rs=w:800,cg:true,m",
  "winners.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/winners.jfif/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true",
  "dr0.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/who-we-serve-5-945x645.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,h:600,cg:true",
  "dr1.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Picture1.png/:/cr=t:13.31%25,l:0%25,w:100%25,h:72.13%25/rs=w:1200,h:600,cg:true",
  "dr2.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Picture2.png/:/cr=t:0%25,l:0%25,w:100%25,h:75.14%25/rs=w:1200,h:600,cg:true",
  "dr3.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Picture3.jpg/:/cr=t:8.54%25,l:0%25,w:100%25,h:72.78%25/rs=w:1200,h:600,cg:true",
  "dr4.webp": "https://img1.wsimg.com/isteam/ip/69c1d22b-e611-4d23-9534-d2b552b371a8/Picture4.png/:/cr=t:0%25,l:0%25,w:100%25,h:64.94%25/rs=w:1200,h:600,cg:true",
  "dr5.webp": "https://img1.wsimg.com/isteam/stock/opPDWdB/:/cr=t:0%25,l:33.98%25,w:35.77%25,h:26.6%25/rs=w:1200,h:600,cg:true,m"
};

await mkdir("public/assets", { recursive: true });
let ok = 0;
for (const [file, url] of Object.entries(images)) {
  const res = await fetch(url, { headers: { Accept: file.endsWith(".webp") ? "image/webp" : "image/jpeg" } });
  if (!res.ok) { console.error("FAILED", file, res.status); continue; }
  await writeFile(`public/assets/${file}`, Buffer.from(await res.arrayBuffer()));
  ok++;
  console.log("saved", file);
}
console.log(`${ok}/${Object.keys(images).length} images saved to public/assets`);
