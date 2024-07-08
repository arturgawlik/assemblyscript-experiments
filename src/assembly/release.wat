(module
 (type $0 (func))
 (type $1 (func (param i32 i32) (result i32)))
 (memory $0 0)
 (export "add" (func $src/assembly/src/index/add))
 (export "runMiltionTimesAdd" (func $src/assembly/src/index/runMiltionTimesAdd))
 (export "runBilionTimesAdd" (func $src/assembly/src/index/runBilionTimesAdd))
 (export "memory" (memory $0))
 (func $src/assembly/src/index/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
 (func $src/assembly/src/index/runMiltionTimesAdd
  (local $0 i32)
  (local $1 i32)
  loop $while-continue|0
   local.get $0
   local.tee $1
   i32.const 1
   i32.add
   local.set $0
   local.get $1
   i32.const 1000000
   i32.le_s
   br_if $while-continue|0
  end
 )
 (func $src/assembly/src/index/runBilionTimesAdd
  (local $0 i32)
  (local $1 i32)
  loop $while-continue|0
   local.get $0
   local.tee $1
   i32.const 1
   i32.add
   local.set $0
   local.get $1
   i32.const 1000000000
   i32.le_s
   br_if $while-continue|0
  end
 )
)
