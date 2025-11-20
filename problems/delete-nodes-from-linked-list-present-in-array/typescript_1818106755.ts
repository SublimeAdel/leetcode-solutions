/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */



function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    let current = head;
    const set = new Set(nums);
    const existsInNums = (value: number)=>{
        return set.has(value);
    }

    while(current.next)
    {
        if(existsInNums(head.val))
        {
            // skip that node
            head=current.next;
            current=current.next;
        }
        else if(existsInNums(current.next.val))
        {
            current.next=current.next.next;
        }
        else {
            current = current.next;
        }
    }
    return head;
};