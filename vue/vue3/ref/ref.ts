type Ref<T = any> = {
  value: T
}

type UnwrapRef<T> = {
  ref:  T extends Ref<infer R> ? UnwrapRef<R> : T
  object: { [K in keyof T ]: UnwrapRef<T[K]> }
  other: T
}[T extends Ref ? 'ref' : T extends object ? 'object' : 'other']


function ref<T>(value: T): T extends Ref ? T : Ref<UnwrapRef<T>>

const count = ref(2)