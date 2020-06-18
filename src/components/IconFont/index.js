import { createFromIconfontCN } from '@ant-design/icons';
import config from "@/../config/defaultSettings"

// 使用：
// import IconFont from '@/components/IconFont';
// <IconFont type='icon-demo' className='xxx-xxx' />
export default createFromIconfontCN({ scriptUrl: config.iconfontUrl })
