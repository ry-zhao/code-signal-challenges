//  input: statues Array of distinct non-negative integers
//  output: minimal number of statues needed to be added to existing statues such that it contains every integer size from L to R

//  return (max - min + 1) - length of statues

function makeArrayConsecutive2(statues) {
  return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}
