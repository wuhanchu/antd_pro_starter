import { schemaFieldType } from "@/outter/fr-schema/src/schema"

export default {
    id: {
        title: "合同id",
        addHide: true,
    },
    contract_compare_id: {
        title: "主合同代码",
        type: schemaFieldType.Select,
        dict: [],
        required: true
    },
    code: {
        title: "此合同代码",
        required: true
    },
    name: {
        title: "合同名称",
        required: true
    },
    remark: {
        title: '备注',
        required: true
    },
    picture: {
        title: '合同图片',
        listHide: true,
        required: true,
        type: schemaFieldType.Upload
    }
}
