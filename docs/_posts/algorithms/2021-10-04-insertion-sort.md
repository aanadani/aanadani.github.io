---
layout: "detail"
categories: computer-science algorithms
title:     "ترتيب بالإدراج"
permalink: /:categories/:title.html
type: 'course'
---

<div class="col-12">
  <h2>
  <bdi>
    الترتيب بالإدراج - Insertion sort
  </bdi>
  </h2>
  <p class="content-p">
  <bdi>
  تعد هذه الخوارزمية من أبسط خوارزميات الفرز فهي تعمل بشكل مشابه للطريقة التي نقوم فيها بترتيب أوراق اللعب في يدنا.
تفترض أن البطاقة الأولى مرتبة بالفعل وباقي البطاقات غير مرتبة إذا كانت البطاقة أكبر من البطاقة التي تسبقها يتم نقل البطاقة موضع واحد إلى اليمين
أما إذا كانت أصغر يتم مقارنتها مع باقي العناصر التي تسبقها وبنفس الطريقة يتم أخذ بطاقات أخرى غير مرتبة وتقوم بمقارنتها مع جميع البطاقات التي تقع على يمينها وذلك لوضعها  في مكانها المناسب
  </bdi>
  </p>
  <h3>
  <bdi>
  ألية العمل :
  </bdi>
  </h3>
  <p class="content-p">
    لنفترض أننا نريد ترتيب هذه المصفوفة ترتيبا تصاعديا
  </p>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td>9 </td>
        <td>5 </td>
        <td>1 </td>
        <td>4 </td>
        <td>3 </td>
      </tr>
    </table>
  </div>
  <p class="content-p">
العنصر الأول في المصفوفة يعتبر مرتب بالفعل نأخذ العنصر الثاني ونبدأ بمقارنته مع العنصر الأول إذا كان العنصر الأول أكبر نقوم بوضع العنصر الحالي على يمين العنصر الأول
  </p>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td class="item-selected">9 </td>
        <td>5 </td>
        <td>1 </td>
        <td>4 </td>
        <td>3 </td>
      </tr>
    </table>
  </div>

  <p class="content-p">
الان أول عنصرين مرتبين نأخذ العنصر الثالث ونقوم بمقارنته مع جميع العناصر التي تقع على يساره ووضعه على يسار العناصر الأصغر منه إذا لم يكن هناك عناصر أصغر منه يبقى في مكانه
  </p>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td class="item-selected">5 </td>
        <td class="item-selected">9 </td>
        <td>1 </td>
        <td>4 </td>
        <td>3 </td>
      </tr>
    </table>
  </div>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td class="item-selected">1 </td>
        <td class="item-selected">5 </td>
        <td class="item-selected">9 </td>
        <td>4 </td>
        <td>3 </td>
      </tr>
    </table>
  </div>
  <p class="content-p">
وبشكل مشابه نضع كل عنصر غير مرتب في موضعه الصحيح
  </p>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td class="item-selected">1 </td>
        <td class="item-selected">4 </td>
        <td class="item-selected">5 </td>
        <td class="item-selected">9 </td>
        <td>3 </td>
      </tr>
    </table>
  </div>
  <p class="content-p">
  <bdi>
حتى نحصل على جميع عناصر المصفوفة مرتبة كالتالي:
  </bdi>
  </p>
  <div class="text-center">
    <table class="table table-bordered">
      <tr>
        <td class="item-selected">1 </td>
        <td class="item-selected">3 </td>
        <td class="item-selected">4 </td>
        <td class="item-selected">5 </td>
        <td class="item-selected">9 </td>
      </tr>
    </table>
  </div>

  <h3>
  <bdi>
  التعقيد الزمني للخوارزمية:
  </bdi>
  </h3>
  <p class="content-p">
  <bdi>
  في الحالة الأسوء يكون التعقيد الزمني
  O(n<sup>2</sup>)
أما في الحالة الأفضل التي تكون فيها عناصر المصفوفة مرتبة بالفعل يكون التعقيد الزمني O(n)
  </bdi>
  </p>

  <h3>
  <bdi>
  كود البرنامج:
  </bdi>
  </h3>
  <div class="code-box">
    <p >
      <pre style="line-height: 1.5em;">
// C++ program for insertion sort
#include <bits/stdc++.h>
using namespace std;
/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)
{
  int i, key, j;
  for (i = 1; i < n; i++)
  {
    key = arr[i];
    j = i - 1;
     
    /* Move elements of arr[0..i-1], that are
    greater than key, to one position ahead
    of their current position */
    while (j >= 0 && arr[j] > key)
      {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
    arr[j + 1] = key;
  }
}

// A utility function to print an array of size n
void printArray(int arr[], int n)
{
  int i;
  for (i = 0; i < n; i++)
    cout << arr[i] << " ";
  cout << endl;
}

/* Driver code */
int main()
{
  int arr[] = { 12, 11, 13, 5, 6 };
  int n = sizeof(arr) / sizeof(arr[0]);
 
  insertionSort(arr, n);
  printArray(arr, n);
 
  return 0;
}
 
// This is code is contributed by rathbhupendra
      </pre>
    </p>
  </div>
</div>
