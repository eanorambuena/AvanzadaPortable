import numpy as np
import pandas as pd
from pandas import DataFrame

from pandas.io.sas.sasreader import ReaderBase

class SAS7BDATReader(ReaderBase):
    def close(self) -> None: ...
    def __next__(self) -> DataFrame: ...
    def read(self, nrows: int | None = ...) -> DataFrame: ...
