import request from '../request/request'

// 跨域外链
export function getListApi (data) {
  const config = {
    url: `https://hackernews.byteark.cn/graphql`,
    method: 'post',
    data
  }
  return request(config)
}