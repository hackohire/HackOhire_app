import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('ProfileDatas')
  },

  addPost (params) {
    return Api().post('ProfileDatas', params)
  }
}