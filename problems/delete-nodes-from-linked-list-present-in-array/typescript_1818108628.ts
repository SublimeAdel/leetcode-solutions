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
    const set = new Set(nums);
    const existsInNums = (value: number)=>{
        return set.has(value);
    }

    while(head && existsInNums(head.val)){
            head=head.next;
    }

    let current = head;

    while(current.next)
    {
        if(existsInNums(current.next.val))
        {
            current.next=current.next.next;
        }
        else {
            current = current.next;
        }
    }
    return head;
};