import request from "@/axios"

export const listPage = (data) => {
  return request({
    url: "app/user/listPage",
    method: "post",
    // params: data, 
    data,
  });
}


// 新增
export const save = (data) => {
  return request({
    url: "app/user/save",
    method: "post",
    data,
  });
};
// 编辑
export const update = (data) => {
  const { id } = data;
  delete data.id;
  return request({
    url: `app/user/update/${id}`,
    method: "post",
    data,
  });
};
// 删除
export const remove = (data) => {
  return request({
    url: "app/user/delete",
    method: "post",
    data,
  });
};