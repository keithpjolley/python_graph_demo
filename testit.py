#! /usr/bin/env python
# -*- coding: UTF8 -*-

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.sparse import random
from scipy import stats

%matplotlib qt5

b = 0.01

from scipy.sparse import random
from scipy.stats import rv_continuous
class CustomDistribution(rv_continuous):
    def _rvs(self, *args, **kwargs):
        return self._random_state.exponpow.rvs(b, *self._size)
X = CustomDistribution(seed=2906)
Y = X()  # get a frozen version of the distribution
S = random(3, 4, density=0.25, random_state=2906, data_rvs=Y.rvs)
S.A

