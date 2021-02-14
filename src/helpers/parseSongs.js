export function parseSongs(data) {
  const res = data.currentPage.map((s) => ({
    id: s.id,
    img: s.thumbnails.high.url,
    title: s.title.length > 20 ? s.title.slice(0, 20) + '...' : s.title,
    author: s.channelTitle,
  }))

  return res
}
