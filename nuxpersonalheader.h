#pragma once
#ifndef _NUX_PERSONAL_HEADER
# define _NUX_PERSONAL_HEADER

/**
*
* # How2Install
* can install by `wget http://h-e1p.github.io/nuxpersonalheader.h`
* also can use `curl -O http://h-e1p.github.io/nuxpersonalheader.h`
*
*/

#include <stdio.h>
//#define IL inline
//#define CLOSES(X) X)
#define STRININGGIFY(x) #x
#define I scanf
#define O printf
#define LOG O
#define DISP(x) LOG(STRINGGIFY(x))
#define disp DISP
#define INPUT(prompt, form, ...) O(prompt); I(form, __VA_ARGS__)
#define input INPUT
#define inp input
#define MAIN void main(void)
#define ELIF else if
#define elif ELIF
#define RANGE(a, x, b) a x && x b

#endif