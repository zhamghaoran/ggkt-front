import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

export default {
  // 讲师的条件查询分页
  // current当前页,limit每页显示的记录数,searchObj 条件对象
  pageList(current, limit, searchObj) {
    return request({
      url: `${api_name}/findQueryPage/${current}/${limit}`,
      method: 'post',
      // 使用json格式进行传递 写法data: searchObj
      // 普通格式传递， 写法 params: searchObj
      data: searchObj
    })
  }
}

