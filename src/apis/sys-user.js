import request from "@/axios"

//分页查询
export const listPage = (data) => {
  return request({
    url: "sys/user/listPage",
    method: "get",
    // params: data, 
    data,
  });
}

// 新增
export const save = (data) => {
  return request({
    url: "sys/user/save",
    method: "post",
    data,
  });
}


//编辑
export const update = (data) => {
  const { id } = data;
  return request({
    url: `sys/user/update/${id}`,
    method: "post",
    data,
  });
}


// 删除
export const remove = (data) => {
  return request({
    url: "sys/user/delete",
    method: "post",
    data,
  });
};

// 设置密码
export const setPsw = (data) => {
  const { id } = data;
  delete data.id;
  return request({
    url: `sys/user/password/${id}`,
    method: "post",
    data,
  });
};