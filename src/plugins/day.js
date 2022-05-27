import dayjs from 'dayjs'

/**
 * 格式化時間
 * @param {string} date 日期時間
 * @param {string} format 格式
 * @returns {string}
 */
export const dayFormat = (date, format = 'YYYY/MM/DD HH:mm') =>
  dayjs(date).format(format)

/**
 * 計算相差天數
 * @param {string} date 較早的日期
 * @param {string} format 格式
 * @returns {number}
 */
export const dayDiff = (date, format = 'YYYY-MM-DD') => {
  const oldDate = dayjs(date).format(format)
  const today = dayjs().format(format)
  const diffDay = dayjs(today).diff(oldDate, 'day')
  return diffDay
}
