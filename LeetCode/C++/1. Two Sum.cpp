#include<stdio.h>
#include<malloc.h>
int* twoSum(int* nums, int numsSize, int target) 
{
	int i,j;
	int* result=(int*)malloc(sizeof(int)*2);
    for(i=0;i<numsSize-1;i++)
    {
    	j=i+1;
    	while(j<numsSize)
    	{
    		if(nums[i]+nums[j]==target)
    		{
    			result[0]=i;
    			result[1]=j;
    			return result;
			}
    		j++;
		}
	}
    return result;
}

