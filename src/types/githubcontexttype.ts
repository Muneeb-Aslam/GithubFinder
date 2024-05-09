/* eslint-disable @typescript-eslint/no-explicit-any */
export interface GithubContextType {
  users:any,
  loading:boolean
  searchUsers:(e:string)=>void
  clearUsers:()=>void
}