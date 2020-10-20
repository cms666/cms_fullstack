//js 动态弱类型语言
//twoSum unfined => function
//go 类型约束  现代的c语言
func twoSum(nums []int,tatget int) []int{
	// o(n2) => o(n)
	h := make(map[int]int)  //hashtable
	//js for pathon
	for i,value :=range nums{
	  if wanted , ok :=h[value];ok{
			return []int{wanted,i}
		}
		else{
			h[target-value] = i;
		}
	}
	return nil
}