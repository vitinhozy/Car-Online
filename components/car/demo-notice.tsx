import {tr,Lang} from '@/lib/i18n';
export function DemoNotice({l}:{l:Lang}){return <div className="demo-notice" role="note">{tr(l,'demoLocal')}</div>}
