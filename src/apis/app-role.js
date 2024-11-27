import request from "@/axios"

export const listPage = (data) => {
  return request({
    url: "app/role/listPage",
    method: "post",
    // params: data, 
    data,
  });
}

// 新增
export const save = (data) => {
  return request({
    url: "app/role/save",
    method: "post",
    data,
  });
};
// 编辑
export const update = (data) => {
  const { id } = data;
  delete data.id;
  return request({
    url: `app/role/update/${id}`,
    method: "post",
    data,
  });
};
// 删除
export const remove = (data) => {
  return request({
    url: "app/role/delete",
    method: "post",
    data,
  });
};
// 绑定资源
export const bindResouce = (data) => {
  return request({
    url: "app/role/bindResouce",
    method: "post",
    data,
  });
};

export const listSimple = () => {
  return request({
    url: "app/role/listSimple",
    method: "get",
  });
};