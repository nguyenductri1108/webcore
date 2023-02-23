export function getElementOffset(e) {
  var curtop = 0;
  if (e.offsetParent) {
    do {
      curtop += e.offsetTop;
    } while (e = e.offsetParent);
    return curtop;
  }
}

export const getStyleEllipsis = (line = 2) => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  WebkitLineClamp: line,
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  whiteSpace: 'pre-wrap'
})