import request from "@/axios"

export const listPage = (data) => {
  return request({
    url: "sys/notice/listPage",
    method: "get",
    // params: data, 
    data,
  });
}

// 新增
export const save = (data) => {
  return request({
    url: "sys/notice/save",
    method: "post",
    data,
  });
}


//编辑
export const update = (data) => {
  const { id } = data;
  return request({
    url: `sys/notice/update/${id}`,
    method: "post",
    data,
  });
}

// 删除
export const remove = (data) => {
  return request({
    url: "sys/notice/delete",
    method: "post",
    data,
  });
};