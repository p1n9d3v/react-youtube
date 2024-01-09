export const getOffsetFromDate = (date) => {
    const now = new Date();
    const target = new Date(date);

    now.setFullYear(now.getFullYear() - target.getFullYear());
    now.setMonth(now.getMonth() - target.getMonth());
    now.setDate(now.getDate() - target.getDate());
    now.setHours(now.getHours() - target.getHours());
    now.setMinutes(now.getMinutes() - target.getMinutes());
    now.setSeconds(now.getSeconds() - target.getSeconds());

    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    if (year > 0) return `${year}년 전`;
    else if (month > 0) return `${month}달 전`;
    else if (day > 0) return `${day}일 전`;
    else if (hour > 0) return `${hour}시간 전`;
    else if (minute > 0) return `${minute}분 전`;
    else if (second > 0) return `${second}초 전`;
};

export const formatNumberWithSuffix = (number) => {
    if (number < 1000) {
        return number.toString();
    } else if (number < 1000000) {
        return (number / 1000).toFixed(1) + ' K';
    } else if (number < 1000000000) {
        return (number / 1000000).toFixed(1) + ' M';
    } else {
        return (number / 1000000000).toFixed(1) + ' B';
    }
};
