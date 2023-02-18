Matches expectaion with server/client render

Refactor, search replace...
```
import styled from 'styled-components';
```
....with...
```
import styled from '@emotion/styled'
```

This part stays the same:
```
const StyledMain = styled.main<{ genderIconPath: string }>`
```


![ss0](https://user-images.githubusercontent.com/57231794/219824481-574a443c-a6ad-4e67-8dfb-ab6aee4a7a27.png)


