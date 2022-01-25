---
layout: "content"
categories: computer-science algorithms
title:     "الخوارزمية التراجعية "
permalink: /:categories/:title.html
type: 'course'
---
<div class="col-12">
<h2> backtracking algorithm-الخوارزمية التراجعية</h2>
<p class="content-p">
خوارزمية التراجع هي عبار عن خوارزمية حل المشكلات تستخدم نهج القوة الغاشمة لإيجاد النتيجة المطلوبة
نهج القوة الغاشمة تحاول إيجاد كل الحلول الممكنة واختيار الحلول الأفضل 
يشير مصطلح التراجع إلى أنه إذا لم يكن الحل الحالي مناسب يقوم بالتراجع عنه ويقوم بتجربة حلول أخرى ويتم استخدام العودية في هذا النهج
هذا النهج يستخدم في حل المشكلات التي لديها عدة حلول إذا كنت تريد الحل الأمثل يجب أن تستخدم البرمجة الديناميكية 
</p>
<h3> : شجرة فضاء الحالة </h3>
<p class="content-p">
شجرة فضاء الحالة هي عبارة عن شجرة تقوم بعرض كل الحالات الممكنة(الحلول المقبولة وغير المقبولة)للمشكلة من الجذر كحالة ابتدائية إلى الأوراق كحالة نهائية </p>
<br/><img class="content-image" src="/assets/img/algorithms/backtrack-1.jpg" alt="images/backtrack-1"/>
<h3> : خوارزمية التراجع </h3>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
                                                             Backtrack(x)<br>
                                                                                                                 إذا كان <bdi>x</bdi>  ليس حل  <br>    
return false  <br>
                                                                                     إذا كان <bdi>x</bdi>  حل نقوم بإضافته إلى قائمة الحلول<br>
backtrack(expand x)
</pre>
</p>
</div>
<h3> : مثال على نهج خوارزمية التراجع </h3>
<h4> : المشكلة </h4>
<p class="content-p">
تريد أن تجد كل الطرق الممكنة لترتيب 2 من الأولاد و1 من الفتيات على ثلاث مقاعد بشرط لا ينبغي أن تكون الفتاة في المقعد الأوسط
</p>
<h4> : الحل  </h4>
<p class="content-p">
هناك مجموعة من 3! =6 الاحتمالات سنقوم بتجربة كل الاحتمالات واختيار الحلول المقبولة وسنقوم بذلك عن طريق العودية 
</p>
<h4> : جميع الاحتمالات هي   </h4>
<br/><img class="content-image" src="/assets/img/algorithms/backtrack-2.jpg" alt="images/backtrack-2"/>
<h4> : شجرة فضاء الحالة التالية تعرض جميع الحلول الممكنة </h4>
<br/><img class="content-image" src="/assets/img/algorithms/backtrack-3.jpg" alt="images/backtrack-3"/>
<div class="code-box">
<p>
<pre style="line-height: 1.5em;">
#include <bits/stdc++.h>
using namespace std;
void permutations(const char *str[], int i, int n)
{

    if (i == n - 1)
    {
        if(strcmp(str[1],"GIRL"))
        {
            for (int i=0; i<n; i++)
                cout<<str[i]<<" ";
                cout<<endl;
        }

        return;
    }


    for (int j = i; j < n; j++)
    {

        swap(str[i], str[j]);


        permutations(str, i + 1, n);


        swap(str[i], str[j]);
    }
}
int main()
{
    const char *str[] = { "GIRL", "BOY1","BOY2"};

    permutations(str, 0, 3);
    return 0;
}

</pre>
</p>
</div>
</div>