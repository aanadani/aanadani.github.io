---
layout: "content"
categories: computer-science algorithms
title:     " التنقل عبر الأشجار  "
permalink: /:categories/:title.html
type: 'course'
---
<div class="col-12">
<h2>   Tree traversal -  التنقل عبر الأشجار  </h2>
<p class="content-p">
التنقل عبر الأشجار يعني زيارة كل عقدة في الشجرة قد تحتاج على سبيل المثال إلى أضافة كل القيم في الشجرة أو العثور على أكبرها ومن أجل ذلك  نحتاج إلى زيارة كل عقدة من الشجرة 
بنى المعطيات الخطية مثل المصفوفات والقوائم والمترابطة والمكدس و.... تحوي طريقة واحدة لقراءة البيانات
بينما بنى المعطيات الهرمية مثل الشجرة يوجد أكثر من طريقة للتنقل عبرها 
</p>
 <br/><img class="content-image" src="/assets/img/algorithms/tree_traversal.jpg" alt="images/tree_traversal"/>
 <p class="content-p">
 دعنا نفكر كيف يمكننا قراءة عناصر الشجرة في الصورة الموجودة في الأعلى 
نبدأ من الأعلى ثم اليسار إلى اليمين
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
1 -> 12 -> 5 -> 6 -> 9
</pre>
</p>
</div>
نبدأ من الأسفل ثم اليسار إلى اليمين 
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
5 -> 6 -> 12 -> 9 -> 1
</pre>
</p>
</div>
على الرغم من ان هذه العملية سهلة لكنها لا تراعي التسلسل الهرمي للشجرة فقط تراعي عمق العقد 
بدلا من ذلك نستخدم طرق التنقل عبر الشجرة التي تراعي البنية الأساسية للشجرة 
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
struct node {
    int data;
    struct node* left;
    struct node* right;
}
</pre>
</p>
</div>
العقدة التي يشار إليها من  اليسار أو اليمين  يمكن ان تحتوي أبناء على اليسار أو اليمين لذلك يجب أن نفكر بهم كشجيرات فرعية بدلا من العقد الفرعية 
 : وفقا لذلك كل شجرة هي مؤلفة من 
عقدة تحمل بيانات 
<br>
شجرتان فرعيتان 
</p>
 <br/><img class="content-image" src="/assets/img/algorithms/tree_traversal2.jpg" alt="images/tree_traversa2"/>
 <p class="content-p">
 يجب أن نتذكر أن هدفنا الأساسي هو زيارة كل عقدة لذلك نحتاج إلى زيارة كل العقد في الشجرة الفرعية 
زيارة الجذر وزيارة جميع العقد في الشجرة الفرعية 
</p>
<h3> : اعتمادا على الترتيب الذي نقوم به هناك ثلاث أنواع من الانتقال </h3>
<h4><bdi>	التنقل الوسطي inorder traversal : </bdi></h4>
 <p class="content-p"><bdi>
 1.	 نقوم بزيارة كل العقد في الشجرة الفرعية اليسرى
 <br>
 2.	ثم العقدة الجذر
 <br>
 3.	نقوم بزيارة كل العقد في الشجرة الفرعية اليمنى 
 </bdi>
 </p>
 <div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
inorder(root->left)
display(root->data)
inorder(root->right)
</pre>
</p>
</div>
<h4><bdi>	التنقل القبلي preorder traversal  : </bdi></h4> <p class="content-p"><bdi>
 1.	نقوم بزيارة العقدة الجذر
 <br>
 2.	نقوم بزيارة كل العقد في الشجرة الفرعية اليسرى
 <br>
3.	نقوم بزيارة كل العقد في الشجرة الفرعية اليمنى
 </bdi>
 </p>
  <div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
display(root->data)
preorder(root->left)
preorder(root->right)
</pre>
</p>
</div>
<h3>: التطبيق العملي </h3>
  <div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
// Tree traversal in C++
#include <bits/stdc++.h>
using namespace std;
struct Node {
  int data;
  struct Node *left, *right;
  Node(int data) {
    this->data = data;
    left = right = NULL;
  }
};

// Preorder traversal
void preorderTraversal(struct Node* node) {
  if (node == NULL)
    return;

  cout << node->data << "->";
  preorderTraversal(node->left);
  preorderTraversal(node->right);
}

// Postorder traversal
void postorderTraversal(struct Node* node) {
  if (node == NULL)
    return;

  postorderTraversal(node->left);
  postorderTraversal(node->right);
  cout << node->data << "->";
}

// Inorder traversal
void inorderTraversal(struct Node* node) {
  if (node == NULL)
    return;

  inorderTraversal(node->left);
  cout << node->data << "->";
  inorderTraversal(node->right);
}

int main() {
  struct Node* root = new Node(1);
  root->left = new Node(12);
  root->right = new Node(9);
  root->left->left = new Node(5);
  root->left->right = new Node(6);

  cout << "Inorder traversal ";
  inorderTraversal(root);

  cout << "\nPreorder traversal ";
  preorderTraversal(root);

  cout << "\nPostorder traversal ";
  postorderTraversal(root);

</pre>
</p>
</div>
</div>