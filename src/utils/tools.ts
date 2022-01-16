import { createHash } from 'crypto';
const salt = 'arivin';

/**
 * 对密码进行加密
 * @param pwd
 * @returns
 */
export function encodePwd(pwd) {
  return createHash('md5')
    .update(pwd + salt)
    .digest('hex');
}
