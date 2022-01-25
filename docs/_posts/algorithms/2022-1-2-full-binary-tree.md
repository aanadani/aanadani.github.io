---
layout: "content"
categories: computer-science algorithms
title:     "   الشجرة الثنائية الممتلئة  "
permalink: /:categories/:title.html
type: 'course'
---
<div class="col-12">
<h2>  Full Binary  tree -     الشجرة الثنائية الممتلئة  </h2>
<p class="content-p">هو نوع خاص من أنواع الأشجار الثنائية تكون كل عقدة تحتوي عقدتين من عقد أبناء أو لا تحتوي على عقد أبناء 
</p>
 <br/><img class="content-image" src="/assets/img/algorithms/full-binary-tree.jpg" alt="images/full-binary-tree"/>
 <h3> : نظرية الشجرة الثنائية الممتلئة </h3>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
i = عدد العقد الداخلية
 n = العدد الإجمالي للعقد
 l = عدد الأوراق 
 λ = عدد المستويات 
</pre>
</p>
</div>
<p class="content-p"><bdi>
1.	عدد الأوراق i + 1
<br>
2.	العدد الكلي للعقد 2i + 1
<br>
3.	عدد العقد الداخلية (n – 1) / 2
<br>
4.	عدد الأوراق (n + 1) / 2
<br>
5.	العدد الكلي للعقد 2l – 1
<br>
6.	عدد العقد الداخلية l – 1
<br>
7.	عدد الأوراق على الأكثر 2λ – 1
</bdi></p>
<p class="content-p"><bdi><b>البرنامج التالي للتحقق إذا كانت الشجرة الثنائية هي شجرة ثنائية ممتلئة full binary tree :</b></bdi></p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
// Checking if a binary tree is a full binary tree in C++
#include <bits/stdc++.h>
using namespace std;

struct Node {
  int key;
  struct Node *left, *right;
};

// New node creation
struct Node *newNode(char k) {
  struct Node *node = (struct Node *)malloc(sizeof(struct Node));
  node->key = k;
  node->right = node->left = NULL;
  return node;
}

bool isFullBinaryTree(struct Node *root) {
  
  // Checking for emptiness
  if (root == NULL)
    return true;

  // Checking for the presence of children
  if (root->left == NULL && root->right == NULL)
    return true;

  if ((root->left) && (root->right))
    return (isFullBinaryTree(root->left) && isFullBinaryTree(root->right));

  return false;
}

int main() {
  struct Node *root = NULL;
  root = newNode(1);
  root->left = newNode(2);
  root->right = newNode(3);
  root->left->left = newNode(4);
  root->left->right = newNode(5);
  root->left->right->left = newNode(6);
  root->left->right->right = newNode(7);

  if (isFullBinaryTree(root))
    cout << "The tree is a full binary tree\n";
  else
    cout << "The tree is not a full binary tree\n";
}
</pre>
</p>
</div>
</div>