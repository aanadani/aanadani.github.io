---
layout: "detail"
categories: computer-science algorithms
title:     "ترتيب الفقاعات"
permalink: /:categories/:title.html
type: 'course'
---

<div class="col-12">
<bdi>
  <h2>
    ترتيب الفقاعات - bubble sort
  </h2>

  <p class="content-p">
تعتبر من أبسط خوارزميات الترتيب وهي تعمل على مقارنة كل عنصر مع العنصر الذي يسبقه وتقوم بمبادلتهما ّإذا كان ترتيبهما خاطئ
  </p>

  <h3>
  الية العمل:
  </h3>

  <p class="content-p">
  بافتراض أن الخوارزمية تقوم بترتيب العناصر تصاعديا <br>
  في الدورة الأولى تقوم الخوارزمية بمقارنة العنصر الأول مع العنصر الثاني في المصفوفة وفي حال كان العنصر الثاني أصغر من العنصر الأول تقوم بمبادلتهما ثم تقوم بمقارنة العنصر الثاني مع العنصر الثالث وفي حال كان العنصر الثالث  أصغر من العنصر الثاني تقوم بمبادلتهما وهكذا حتى أخر عنصر في المصفوفة
  </p>

  <h3>
مثال:
  </h3>
  <p class="content-p">
    لنفترض أننا نريد ترتيب هذه المصفوفة ترتيبا تصاعديا
  </p>

  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>8 </td>
        <td>2 </td>
        <td>4 </td>
        <td>1 </td>
        <td>5 </td>
      </tr>
    </table>
  </div>
  <p class="content-p">
    في الدورة الأولى سوف نقوم بمقارنة العناصر 8و2 ثم 8و4 (بعد تبديل اماكن 8و2) ثم 8و1 الخ. كالتالي:
  </p>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td class="item-selected">8 </td>
        <td class="item-selected">2 </td>
        <td>4 </td>
        <td>1 </td>
        <td>5 </td>
      </tr>
    </table>
  </div>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>2 </td>
        <td class="item-selected">8 </td>
        <td class="item-selected">4 </td>
        <td>1 </td>
        <td>5 </td>
      </tr>
    </table>
  </div>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>2 </td>
        <td>4 </td>
        <td class="item-selected">8 </td>
        <td class="item-selected">1 </td>
        <td>5 </td>
      </tr>
    </table>
  </div>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>2 </td>
        <td>4 </td>
        <td>1 </td>
        <td class="item-selected">8 </td>
        <td class="item-selected">5 </td>
      </tr>
    </table>
  </div>
  <p class="content-p">
    الدورة الثانية ستكون بالشكل التالي:
  </p>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td class="item-selected">2 </td>
        <td class="item-selected">4 </td>
        <td>1 </td>
        <td>5 </td>
        <td>8 </td>
      </tr>
    </table>
  </div>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>2 </td>
        <td class="item-selected">4 </td>
        <td class="item-selected">1 </td>
        <td>5 </td>
        <td>8 </td>
      </tr>
    </table>
  </div>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>2 </td>
        <td>1 </td>
        <td class="item-selected">4 </td>
        <td class="item-selected">5 </td>
        <td>8 </td>
      </tr>
    </table>
  </div>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>2 </td>
        <td>1 </td>
        <td>4 </td>
        <td class="item-selected">5 </td>
        <td class="item-selected">8 </td>
      </tr>
    </table>
  </div>
  <p class="content-p">
    الدورة الثالثة: (نلاحظ أن عناصر المصفوفة الثلاث الأخير أصبحت بالفعل مرتبة) في بعض النسخ المحسنة من هذه الخوارزمية تتجاهل العناصر المرتبة أما في النسخة الأساسية للخوارزمية فلا يتجاهل العناصر المرتبة. في هذه الدورة تصبح المصفوفة كالتالي:
  </p>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td class="item-selected">2 </td>
        <td class="item-selected">1 </td>
        <td>4 </td>
        <td>5 </td>
        <td>8 </td>
      </tr>
    </table>
  </div>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>1 </td>
        <td class="item-selected">2 </td>
        <td class="item-selected">4 </td>
        <td>5 </td>
        <td>8 </td>
      </tr>
    </table>
  </div>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>1 </td>
        <td>2 </td>
        <td class="item-selected">4 </td>
        <td class="item-selected">5 </td>
        <td>8 </td>
      </tr>
    </table>
  </div>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>1 </td>
        <td>2 </td>
        <td>4 </td>
        <td class="item-selected">5 </td>
        <td class="item-selected">8 </td>
      </tr>
    </table>
  </div>
  <p class="content-p">
أما في الدورة الرابعة و الخامسة فل يكون هناك أي تغيير (لأن عناصر المصفوفة أصبحت مرتبة بالفعل) في النتيجة سوف نحصل على المصفوفة التالية:
  </p>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>1 </td>
        <td>2 </td>
        <td>4 </td>
        <td>5 </td>
        <td>8 </td>
      </tr>
    </table>
  </div>
  <h3>
التعقيد الزمني:
  </h3>
  <p class="content-p">
  في الحالة الأسوء يكون التعقيد الزمني
  O(n<sup>2</sup>)
  أما في الحالة الأفضل التي تكون فيها عناصر المصفوفة مرتبة بالفعل يكون التعقيد الزمني
  O(n)
  </p>
  <h3>
كود الخوارزمية:
  </h3>
</bdi>
  <div class="terminal-box">
    <p>
    <pre style="line-height: 1.5em;">
// C++ program for implementation of Bubble sort 
#include <bits/stdc++.h>
using namespace std;
      
void swap(int *xp, int *yp) 
{ 
  int temp = *xp; 
  *xp = *yp; 
  *yp = temp; 
} 
      
// A function to implement bubble sort 
void bubbleSort(int arr[], int n) 
{ 
int i, j; 
  for (i = 0; i < n-1; i++)
  {
    // Last i elements are already in place 
    for (j = 0; j < n-i-1; j++){ 
      if (arr[j] > arr[j+1]) 
        swap(&arr[j], &arr[j+1]);
    } 
  }
} 
      
/* Function to print an array */
void printArray(int arr[], int size) 
{ 
  int i; 
    for (i = 0; i < size; i++) 
      cout << arr[i] << " "; 
    cout << endl; 
} 
      
// Driver code 
int main() 
{ 
  int arr[] = {64, 34, 25, 12, 22, 11, 90}; 
  int n = sizeof(arr)/sizeof(arr[0]); 
  bubbleSort(arr, n); 
  cout<<"Sorted array: \n"; 
  printArray(arr, n); 
  return 0; 
} 
      
// This code is contributed by rathbhupendra
      </pre>
    </p>
  </div>
</div>
