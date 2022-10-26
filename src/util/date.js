/**
 * 日期格式化
 * @param date
 * @param fmt
 * @returns {*}
 */
function format (date, fmt) {
    const o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    let year = date.getFullYear().toString();
    year = year.length >= 4 ? year : '0000'.substr(0, 4 - year.length) + year;

    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (year + "").substr(4 - RegExp.$1.length));
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

/**
 * 毫秒可读
 * @param ms
 */
function humanMillisecond(ms) {
    if (ms < 0) ms = -ms;

    const time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: Math.floor(ms / 1000) % 60,
        millisecond: Math.floor(ms) % 1000
    };

    return Object.entries(time)
        .filter(val => val[1] !== 0)
        .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
        .join(', ');
}


/**
 * 秒数 => 人类可读化
 * @param seconds
 */
export function humanizeSeconds(seconds) {
    let sec = parseInt(seconds),
        min = 0,
        hour = 0;
    if (sec >= 60) {
        min = parseInt(sec / 60);
        sec = parseInt((sec % 60));
        if (min >= 60) {
            hour = parseInt(min / 60);
            min = parseInt(min % 60);
        }
    }
    return hour.toString().padStart(2, '0') + ':' +
        min.toString().padStart(2, '0') + ':' +
        sec.toString().padStart(2, '0');

}


module.exports = {
    humanMillisecond,
    format,
    humanizeSeconds
}
