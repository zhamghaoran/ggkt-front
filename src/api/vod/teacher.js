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
  },
  // 讲师删除接口
  removeTeacherId(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  // 讲师添加
  saveTeacher(teacher) {
    return request({
      url: `${api_name}/saveTeacher`,
      method: 'post',
      data: teacher
    })
  },
  // 根据id 查询
  getTeacherById(id) {
    return request({
      url: `${api_name}/getTeacher/${id}`,
      method: 'get'
    })
  },
  updateTeacher(teacher) {
    return request({
      url: `${api_name}/updateTeacher`,
      method: 'post',
      data: teacher
    })
  },
  batchRemove(idList) {
    return request({
      url: `${api_name}/removeBatch`,
      method: `delete`,
      data: idList
    })
  },
  list() {
    return request({
      url: `${api_name}/findAll`,
      method: `get`
    })
  }
}

