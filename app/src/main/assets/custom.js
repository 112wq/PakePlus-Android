console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
window.onload = function() {
// 视频路径：已替换为 data 文件夹里的 XRQZ.mp4
const videoSrc = './data/XRQZ.mp4';

const video = document.createElement('video');
video.src = videoSrc;
video.autoplay = true; // 自动播放（手机端需注意自动播放策略，可测试调整）
video.loop = true; // 循环播放（不需要可删）
video.style.position = 'fixed';
video.style.top = '0';
video.style.left = '0';
video.style.width = '100vw'; // 全屏宽度
video.style.height = '100vh'; // 全屏高度
video.style.zIndex = '9999'; // 层级置顶，覆盖其他内容
video.style.objectFit = 'cover'; // 视频自适应铺满，不变形

// 将视频插入页面最顶部
document.body.prepend(video);

// 5秒后隐藏视频（时间可改，单位毫秒；不想隐藏可删除这段）
setTimeout(() => {
video.style.display = 'none';
// 若想彻底移除视频，可替换为：video.remove();
}, 5000);
};