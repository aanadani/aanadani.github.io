---
layout: "content"
categories: computer-science algorithms
title:     "البحث الخطي  "
permalink: /:categories/:title.html
type: 'course'
---
<div class="col-12">
<h2>  linear search - البحث الخطي  </h2>
<p class="content-p">
هي الطريقة التي نستخدمها عادة  في عملية البحث ونستخدمها كثيرا في حياتنا اليومية  
</p>
<h3> : مبدأ عمل الخوارزمية </h3>
<p class="content-p"><bdi>
تعتمد هذه الخوارزمية في عملها على مقارنة العنصر الأول من المصفوفة مع العنصر الذي نبحث عنه اذا كان هو العنصر الذي نبحث عنه نقوم بالاحتفاظ بindex    الخاص بهذا العنصر وتكون عملية البحث قد انتهت
أما إذا لم يكن هو العنصر الذي نبحث عنه نقوم بمقارنة العنصر الثاني ثم الثالث  وهكذا حتى أخر عنصر في المصفوفة 
إذا كان العنصر الذي نريد البحث عنه غير موجود في المصفوفة يقوم التابع بإعادة القيمة -1 للدلالة على عدم وجود هذا العنصر في المصفوفة 
ولا تشترط هذه الخوارزمية أن تكون عناصر المصفوفة مرتبة تصاعديا أو تنازليا
</bdi>
</p>
<h3> : تعقيد الخوارزمية </h3>
<p class="content-p"><bdi>
 • عندما يكون العنصر الذي نبحث عنه غير موجود في المصفوفة فإننا سنقوم ب n عملية مقارنة وبالتالي فإن  تعقيد الخوارزمية هو O(N)
</bdi>
<br>
<bdi>•	عندما يكون العنصر الذي نبحث عنه موجود في أول عنصر من المصفوفة فإننا سنقوم بعملية مقارنة واحدة بالتالي فإن تعقيد الخوارزمية هو O(1)
</bdi>
</p>
<h3> : تطبيق عملي </h3>
<h4><bdi>لدينا مصفوفة حجمها N  تتكون من أعداد صحيحة ويتم إعطاءك عنصر K نحتاج للبحث عن هذا العنصر في المصفوفة إذا كان العنصر موجود في المصفوفة نقوم بطباعة index الخاص بهذا العنصر إذا لم يكون العنصر موجود في المصفوفة نطبع العدد -1
</bdi>
</h4>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
// Linear Search in C++
#include <bits/stdc++.h>
using namespace std;
int search(int array[], int n, int x) {

  // Going through array sequencially
  for (int i = 0; i < n; i++)
    if (array[i] == x)
      return i;
  return -1;
}

int main() {
  int array[] = {2, 4, 0, 1, 9};
  int x = 1;
  int n = sizeof(array) / sizeof(array[0]);

  int result = search(array, n, x);

  (result == -1) ? cout << "Element not found" : cout << "Element found at index: " << result;
}
</pre>
</p>
</div>
<h4> : تطبيقات البحث الخطي</h4>
<p class="content-p">
يستخدم في عمليات البحث في المصفوفات التي تحتوي أقل من 100 عنصر 
</p>
</div>