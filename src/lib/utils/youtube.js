/**
 * 유튜브 영상 썸네일 추출
 * @param {string} link
 */
export const getYoutubeThumbnail = link => {
  const [_, videoId] = link.split('?v=');
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};
