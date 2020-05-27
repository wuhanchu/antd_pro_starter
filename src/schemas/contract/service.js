import { createApi } from "@/outter/fr-schema/src/service"
import { schemaFieldType } from "@/outter/fr-schema/src/schema"

const service = createApi("contract_compare", null, { skipOauth: true }, "eq.")
// service.search = createApi("rpc/question_search", schema).getBasic

export default service
