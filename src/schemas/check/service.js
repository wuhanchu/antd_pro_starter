import { createApi } from "@/outter/fr-schema/src/service"

const service = createApi("contract", null, { skipOauth: true }, "eq.")
service.getCompareList = createApi("contract_compare", null, { skipOauth: true },).get
export default service
