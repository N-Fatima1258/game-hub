const getCroppedImageUrl = (url: string) => {
//  here we should find the index of the word media followed by the / in our URL
// url.indexOf('media/')  ==>  represents the starting position of media parameter
const target = 'media/'
const index = url.indexOf(target) + target.length;
return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}
export default getCroppedImageUrl