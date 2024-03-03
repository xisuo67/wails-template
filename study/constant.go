package main

import (
	"fmt"
	"math"
)

const s string = "constant"
const b int = 2

func main() {
	fmt.Println(s)
	fmt.Println(b)

	const b = "constant no string"

	fmt.Println(b)

	const n = 500000000

	const d = 3e20 / n
	fmt.Println(d)

	fmt.Println(int64(d))

	fmt.Println(math.Sin(n))
}