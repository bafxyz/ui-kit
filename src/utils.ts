export const uniqueId = (prefix = 'uid') =>
    prefix +
    '-' +
    Math.random()
        .toString(36)
        .substr(2, 9)
