#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.


AC_PREREQ(2.52)

AC_INIT([apertium-tr-az], [0.1], [ftyers@users.sourceforge.net])
AM_INIT_AUTOMAKE([apertium-tr-az], [0.1], no-define)
AC_PROG_LN_S
AC_PROG_AWK
AC_CONFIG_HEADER([config])

PKG_CHECK_MODULES(APERTIUM, apertium-3.0 >= 3.0.0)

APERTIUM_VER=30

AC_SUBST(APERTIUM_VER)

AC_OUTPUT([Makefile])
