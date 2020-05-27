import { schemaFieldType } from "@/outter/fr-schema/src/schema"

export default {
    id: {
        title: "合同id",
        required: true,
        addHide: true,
    },
    code: {
        title: '合同代码',
        required: true,
    },
    name: {
        title: "合同名称",
        required: true,
    },
    picture: {
        title: '合同图片',
        required: true,
        listHide: true,
        type: schemaFieldType.Upload
    },
    remark: {
        required: true,
        title: '备注'
    },
}
