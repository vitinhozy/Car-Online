'use client';
import {Select,SelectTrigger,SelectValue,SelectContent,SelectItem} from '@/components/ui/select';
export function Choice({value,onChange,options,label}: {value:string;onChange:(x:string)=>void;options:{value:string;label:string}[];label:string}){return <label className="field"><span>{label}</span><Select value={value||'_all'} onValueChange={x=>onChange(x==='_all'?'':x)}><SelectTrigger aria-label={label}><SelectValue/></SelectTrigger><SelectContent>{options.map(x=><SelectItem key={x.value||'_all'} value={x.value||'_all'}>{x.label}</SelectItem>)}</SelectContent></Select></label>}
export function Field({label,...props}:any){return <label className="field"><span>{label}</span><input {...props}/></label>}
