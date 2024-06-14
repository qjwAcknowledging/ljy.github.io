let newYearTimer = null;

function startNewYearCountdown() {
    clearTimeout(newYearTimer);
    if (!document.querySelector('#newYear')) return;

    let newYearTimestamp = new Date('2023-01-22 00:00:00').getTime() / 1000;
    let week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' };

    updateTime();

    function updateTime() {
        let now = new Date();

        document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()];

        let secondsRemaining = newYearTimestamp - Math.round(now.getTime() / 1000);

        if (secondsRemaining < 0) {
            document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
            document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐</span>';
        } else {
            document.querySelector('#newYear .title').innerHTML = '距离2023年春节：';

            if (secondsRemaining > 86400) {
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(secondsRemaining / 86400)}<span class="unit">天</span></span>`;
            } else {
                let hours = padZero(Math.floor(secondsRemaining / 3600));
                secondsRemaining %= 3600;
                let minutes = padZero(Math.floor(secondsRemaining / 60));
                secondsRemaining %= 60;
                let seconds = padZero(secondsRemaining);
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${hours}:${minutes}:${seconds}</span>`;
                newYearTimer = setTimeout(updateTime, 1000);
            }
        }
    }

    function padZero(num) {
        return num < 10 ? '0' + num : num;
    }

    // 元宝飘落
    $(document).ready(function () {
        $('#newYear').wpSuperSnow({
            flakes: ['https://tuchuang.voooe.cn/images/2023/01/02/yb1.webp', 'https://tuchuang.voooe.cn/images/2023/01/02/yb2.webp', 'https://tuchuang.voooe.cn/images/2023/01/02/yb3.webp'],
            totalFlakes: '100',
            zIndex: '999999',
            maxSize: '30',
            maxDuration: '20',
            useFlakeTrans: false
        });
    });
}

// Pjax适配
document.addEventListener('pjax:complete', startNewYearCountdown);
document.addEventListener('DOMContentLoaded', startNewYearCountdown);